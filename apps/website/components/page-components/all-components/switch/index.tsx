import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Switch } from '@/components/ui/switch';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Switch
      size="{{size}}"
      isDisabled={ {{isDisabled}} }
      trackColor="{{trackColor}}"
      thumbColor="{{thumbColor}}"
      activeThumbColor="{{activeThumbColor}}"
      ios_backgroundColor="{{ios_backgroundColor}}"
    />
  )
}`}
      argTypes={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg"
    ],
    "defaultValue": "md"
  },
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "trackColor": {
    "control": {
      "type": "select"
    },
    "options": [
      "#E2E8F0",
      "#000000"
    ],
    "defaultValue": "#E2E8F0"
  },
  "thumbColor": {
    "control": {
      "type": "select"
    },
    "options": [
      "#FFFFFF",
      "#000000"
    ],
    "defaultValue": "#FFFFFF"
  },
  "activeThumbColor": {
    "control": {
      "type": "select"
    },
    "options": [
      "#000000",
      "#FFFFFF"
    ],
    "defaultValue": "#000000"
  },
  "ios_backgroundColor": {
    "control": {
      "type": "select"
    },
    "options": [
      "#E2E8F0",
      "#000000"
    ],
    "defaultValue": "#E2E8F0"
  }
}}
      reactLive={{ Switch }}
      title={""}
      description={""}
    />
  );
}