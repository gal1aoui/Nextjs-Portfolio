"use client";

import { useState } from "react";
import { EditorState, LexicalEditor } from "lexical";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import {
  $isTextNode,
  DOMConversionMap,
  DOMExportOutput,
  DOMExportOutputMap,
  isHTMLElement,
  Klass,
  LexicalNode,
  ParagraphNode,
  TextNode,
} from "lexical";
import { $getRoot, $createParagraphNode, $isElementNode } from "lexical";
import { ModalFooter } from "@heroui/modal";
import { addToast } from "@heroui/toast";

import { Button } from "../ui/button";
import { SendIcon } from "../icons";

import ContactForm, { ContactFormType } from "./contact-form";
import {
  parseAllowedColor,
  parseAllowedFontSize,
} from "./editor/configs/styleConfig";
import ExampleTheme from "./editor/configs/theme";
import ContactTextEditor from "./components/contact-text-editor";
import { EditorActionIcon } from "./editor/icons";

import { sendEmail } from "@/lib/mailer";
import { useModal } from "@/providers/modal-provider";

const removeStylesExportDOM = (
  editor: LexicalEditor,
  target: LexicalNode,
): DOMExportOutput => {
  const output = target.exportDOM(editor);

  if (output && isHTMLElement(output.element)) {
    for (const el of [
      output.element,
      ...Array.from(output.element.querySelectorAll("[style],[class]")),
    ]) {
      el.removeAttribute("class");
      el.removeAttribute("style");
    }
  }

  return output;
};

const exportMap: DOMExportOutputMap = new Map<
  Klass<LexicalNode>,
  (editor: LexicalEditor, target: LexicalNode) => DOMExportOutput
>([
  [ParagraphNode, removeStylesExportDOM],
  [TextNode, removeStylesExportDOM],
]);

const getExtraStyles = (element: HTMLElement): string => {
  let extraStyles = "";
  const fontSize = parseAllowedFontSize(element.style.fontSize);
  const backgroundColor = parseAllowedColor(element.style.backgroundColor);
  const color = parseAllowedColor(element.style.color);

  if (fontSize !== "" && fontSize !== "15px") {
    extraStyles += `font-size: ${fontSize};`;
  }
  if (backgroundColor !== "" && backgroundColor !== "rgb(255, 255, 255)") {
    extraStyles += `background-color: ${backgroundColor};`;
  }
  if (color !== "" && color !== "rgb(0, 0, 0)") {
    extraStyles += `color: ${color};`;
  }

  return extraStyles;
};

const constructImportMap = (): DOMConversionMap => {
  const importMap: DOMConversionMap = {};

  for (const [tag, fn] of Object.entries(TextNode.importDOM() || {})) {
    importMap[tag] = (importNode) => {
      const importer = fn(importNode);

      if (!importer) {
        return null;
      }

      return {
        ...importer,
        conversion: (element) => {
          const output = importer.conversion(element);

          if (
            output === null ||
            output.forChild === undefined ||
            output.after !== undefined ||
            output.node !== null
          ) {
            return output;
          }
          const extraStyles = getExtraStyles(element);

          if (extraStyles) {
            const { forChild } = output;

            return {
              ...output,
              forChild: (child, parent) => {
                const textNode = forChild(child, parent);

                if ($isTextNode(textNode)) {
                  textNode.setStyle(textNode.getStyle() + extraStyles);
                }

                return textNode;
              },
            };
          }

          return output;
        },
      };
    };
  }

  return importMap;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ContactConfirmForm({
  form,
}: {
  form: ContactFormType;
}) {
  const { openModal, closeModal } = useModal();

  const autofill = `<b>Dear Achref,</b>
    <br />
    <p>
    I'm <b>${form.name}</b> from <u>${form.company}</u>, we are pleased to invite you to an interview as part of our recruitment process.
    </p>
    <p>
    <b>Interview details:</b>
    <br />
    <p>
    ${form.date && `Date ${form.date.day} ${monthNames[form.date.month + 1]} ${form.date.year === new Date().getFullYear() ? "" : form.date.year}`}
    ${form.time && `Time ${form.time.hour}:${form.time.minute}`}
    </p>
    </p>
    <p>
    The interview will be conducted <u>[interviewType].</u>
    </p>
    <p>
    Please confirm your availability by replying to this email.
    </p>
    <p>
    We look forward to speaking with you.
    </p>
    <b>${form.name}</b>
    ${form.email}
    <u>${form.company}</u>
  `;
  const [description, setDescription] = useState<string>("");

  const onChange = (editorState: EditorState, editor: LexicalEditor) => {
    editorState.read(() => {
      const htmlString = $generateHtmlFromNodes(editor, null);

      if (description !== htmlString) {
        setDescription(htmlString);
      }
    });
  };

  const prePopulate = (editor: LexicalEditor) => {
    editor.update(() => {
      const root = $getRoot();

      root.clear();

      const parser = new DOMParser();
      const dom = parser.parseFromString(autofill.trim(), "text/html");

      const nodes = $generateNodesFromDOM(editor, dom);

      nodes.forEach((node) => {
        if ($isElementNode(node)) {
          root.append(node);
        } else {
          const paragraph = $createParagraphNode();

          paragraph.append(node);
          root.append(paragraph);
        }
      });
    });
  };

  const editorConfig = {
    editorState: (editor: LexicalEditor) => prePopulate(editor),
    namespace: "Email body",
    html: {
      export: exportMap,
      import: constructImportMap(),
    },
    nodes: [ParagraphNode, TextNode],
    onError(error: Error) {
      throw error;
    },
    theme: ExampleTheme,
  };

  const handleSendEmail = async () => {
    const result = await sendEmail(form, description);

    if (result.error) {
      addToast({
        title: "Failed to send email.",
        color: "danger",
        variant: "bordered",
      });
    } else {
      closeModal();
      addToast({
        title: "Thank you for reaching out. I will get back to you soon.",
        color: "success",
        variant: "bordered",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <ContactTextEditor editorConfig={editorConfig} onChange={onChange} />
      <ModalFooter className="w-full flex justify-between p-0">
        <Button
          color="primary"
          size="md"
          startContent={<EditorActionIcon type="leftArrow" />}
          onPress={() =>
            openModal({
              title: "Edit your information",
              render: () => <ContactForm formFill={form} />,
            })
          }
        >
          Return
        </Button>
        <Button size="md" startContent={<SendIcon />} onPress={handleSendEmail}>
          Send
        </Button>
      </ModalFooter>
    </div>
  );
}
