import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_LOW,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import { useCallback, useEffect, useRef, useState } from "react";

import { EditorActionIcon, RedoIcon, UndoIcon } from "../icons";

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(
          () => {
            $updateToolbar();
          },
          { editor },
        );
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();

          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);

          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);

          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
    );
  }, [editor, $updateToolbar]);

  return (
    <div ref={toolbarRef} className="toolbar bg-default-100 overflow-auto">
      <div className="flex gap-1">
        <button
          aria-label="Undo"
          className="toolbar-item spaced"
          disabled={!canUndo}
          onClick={() => {
            editor.dispatchCommand(UNDO_COMMAND, undefined);
          }}
        >
          <UndoIcon disabled={!canUndo} />
        </button>
        <button
          aria-label="Redo"
          className="toolbar-item"
          disabled={!canRedo}
          onClick={() => {
            editor.dispatchCommand(REDO_COMMAND, undefined);
          }}
        >
          <RedoIcon disabled={!canRedo} />
        </button>
      </div>
      <div className="flex gap-1">
        <button
          aria-label="Format Bold"
          className={"toolbar-item spaced " + (isBold ? "active" : "")}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
          }}
        >
          <EditorActionIcon type="formatBold" />
        </button>
        <button
          aria-label="Format Italics"
          className={"toolbar-item spaced " + (isItalic ? "active" : "")}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
          }}
        >
          <EditorActionIcon type="formatItalic" />
        </button>
        <button
          aria-label="Format Underline"
          className={"toolbar-item spaced " + (isUnderline ? "active" : "")}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
          }}
        >
          <EditorActionIcon type="formatUnderline" />
        </button>
        <button
          aria-label="Format Strikethrough"
          className={"toolbar-item spaced " + (isStrikethrough ? "active" : "")}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
          }}
        >
          <EditorActionIcon type="strikethrough" />
        </button>
      </div>
      <div className="flex gap-1">
        <button
          aria-label="Left Align"
          className="toolbar-item spaced"
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
          }}
        >
          <EditorActionIcon type="leftAlign" />
        </button>
        <button
          aria-label="Center Align"
          className="toolbar-item spaced"
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
          }}
        >
          <EditorActionIcon type="centerAlign" />
        </button>
        <button
          aria-label="Right Align"
          className="toolbar-item spaced"
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
          }}
        >
          <EditorActionIcon type="rightAlign" />
        </button>
        <button
          aria-label="Justify Align"
          className="toolbar-item"
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
          }}
        >
          <EditorActionIcon type="justifyAlign" />
        </button>
      </div>
    </div>
  );
}
