import { IconSvgProps } from "@/types";

type ShapeType = "formatBold" | "formatItalic" | "formatUnderline" | "strikethrough" | "leftAlign" | "centerAlign" | "rightAlign" | "justifyAlign";

const IconsShape: Record<ShapeType, string> = {
    "formatBold": "M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z",
    "formatItalic": "M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803",
    "formatUnderline": "M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5m-2.25 16.502h16.5",
    "strikethrough": "M12 12a8.912 8.912 0 0 1-.318-.079c-1.585-.424-2.904-1.247-3.76-2.236-.873-1.009-1.265-2.19-.968-3.301.59-2.2 3.663-3.29 6.863-2.432A8.186 8.186 0 0 1 16.5 5.21M6.42 17.81c.857.99 2.176 1.812 3.761 2.237 3.2.858 6.274-.23 6.863-2.431.233-.868.044-1.779-.465-2.617M3.75 12h16.5",
    "leftAlign": "M3,12H17M3,6H21M3,18H13",
    "centerAlign": "M6,12H18M3,6H21M3,18H21",
    "rightAlign": "M21,12H7M21,6H3M21,18H11",
    "justifyAlign": "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
}

export const UndoIcon: React.FC<IconSvgProps & { disabled?: boolean }> = ({
  size = 18,
  disabled = false,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      strokeWidth={2}
      stroke={ disabled ? "gray" : "currentColor" }
      fill="none"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
    </svg>
  );
};

export const RedoIcon: React.FC<IconSvgProps & { disabled?: boolean }> = ({
  size = 18,
  disabled = false,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      strokeWidth={2}
      stroke={ disabled ? "gray" : "currentColor" }
      fill="none"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
    </svg>
  );
};

export const EditorActionIcon: React.FC<IconSvgProps & {type: ShapeType}> = ({
  size = 18,
  type,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={IconsShape[type]}
      />
    </svg>
  );
};

export const JustifyAlignIcon: React.FC<IconSvgProps> = ({
  size = 18,
  type,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
};




