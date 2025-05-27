import { useState, useEffect, useContext } from "react";
import Handlebars from "handlebars";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import CodeBlock from "@/components/custom/markdown/code-block";
import { Box, ChevronDownIcon, Heading, Switch, Text } from "@/components/ui";
import { ThemeContext } from "@/utils/context/theme-context";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";
export function CodePreviewer({
  code,
  message,
  argTypes,
  reactLive,
  title,
  description,
}: {
  code: string;
  message: string;
  argTypes: Record<string, any>;
  reactLive: any;
  title: string | {};
  description: string | {};
}) {
  const { colorMode } = useContext(ThemeContext);
  // Initialize state with default values from args
  const [values, setValues] = useState<Record<string, any>>({});
  const [compiledCode, setCompiledCode] = useState<any>();
  // Initialize values on component mount or when args change
  useEffect(() => {
    const initialValues: Record<string, any> = {};
    Object.entries(argTypes).forEach(([key, value]) => {
      initialValues[key] = value.defaultValue;
    });
    setValues(initialValues);
  }, [argTypes]);

  useEffect(() => {
    const compiledCodetemp = Handlebars.compile(code);
    if (values) {
      setCompiledCode(compiledCodetemp(values));
    }
  }, [values]);

  // Handle control value changes
  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Generic controller component
  const ArgController = ({ name, config }: { name: string; config: any }) => {
    const { control, options, defaultValue } = config;

    if (control?.type === "select") {
      return (
        <Box className="control-item">
          <Text className="text-lg">{name}:</Text>
          <Select
            className="w-full"
            onValueChange={(value: string) => handleChange(name, value)}
          >
            <SelectTrigger
              variant="underlined"
              className="w-full justify-between items-center border-outline-200"
              size="md"
            >
              <SelectInput
                className="text-typography-900 text-lg font-medium placeholder:text-typography-900"
                placeholder={values[name]}
              />
              <SelectIcon
                size="xl"
                className="mr-3 text-typography-900"
                as={ChevronDownIcon}
              />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {Object.entries(options).map(([key, value]) => (
                  <SelectItem key={key} label={value} value={value} />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
        </Box>
      );
    }

    if (control?.type === "boolean" || typeof defaultValue === "boolean") {
      return (
        <Box className="flex flex-col gap-2">
          <Text className="text-lg" htmlFor={name}>
            {name}:
          </Text>
          <Switch
            size="md"
            isDisabled={false}
            trackColor={{ false: "#D4D4D4", true: "#005DB4" }}
            thumbColor={"#FAFAFA"}
            activeThumbColor={"#FAFAFA"}
            ios_backgroundColor={"#D4D4D4"}
            value={values[name] ?? defaultValue}
            onToggle={() => handleChange(name, !values[name] ?? defaultValue)}
          />
        </Box>
      );
    }

    // Add more control types as needed (checkbox, radio, etc.)

    return (
      <Box className="control-item">
        <Text className="text-lg">
          {name}: {JSON.stringify(values[name] || defaultValue)}
        </Text>
      </Box>
    );
  };

  return (
    <Box>
      {title && <Heading size="xl" className="text-xl font-bold text-typography-900 mt-3 mb-1.5 font-jakarta">{title}</Heading>}
      {description && <Text className="text-typography-800 font-medium mb-3 font-inter">{description}</Text>}
      <Box className="flex flex-col w-full my-2">
        <Box className="-mb-2 border border-outline-100 rounded-t-lg flex-col flex w-full min-h-[200px] md:flex-row">
          {Object.keys(argTypes).length > 0 && (
            <Box className="p-4 md:border-r border-b py-10 border-outline-100 flex-1">
              <Box className="flex flex-col gap-2">
                {Object.entries(argTypes).map(([key, value]) => (
                  <ArgController key={key} name={key} config={value} />
                ))}
              </Box>
            </Box>
          )}
          <Box className="p-4 flex-1 flex items-center justify-center w-full ">
            <LiveProvider code={compiledCode} scope={{ ...reactLive }}>
              <LiveError />
              <LivePreview className=" flex items-center justify-center  w-full" />
            </LiveProvider>
          </Box>
        </Box>
        <CodeBlock
          code={compiledCode}
          language="tsx"
          className="rounded-b-lg rounded-t-none border-t-0"
        />
      </Box>
    </Box>
  );
}
