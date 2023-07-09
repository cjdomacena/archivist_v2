import * as RadixTooltip from "@radix-ui/react-tooltip";
import { AiFillInfoCircle } from "react-icons/ai";

interface TooltipProps {
    description: string;
}

export const Tooltip = ({ description }: TooltipProps) => {
    return <RadixTooltip.Provider>
        <RadixTooltip.Root >
            <RadixTooltip.Trigger>
                <AiFillInfoCircle className="w-4 h-4 text-purple-500" />
            </RadixTooltip.Trigger>
            <RadixTooltip.Portal>
                <RadixTooltip.Content side="right" sideOffset={5} spellCheck className="text-xs bg-neutral-800 p-2 rounded z-50 max-w-[50ch]">
                    {description}
                    <RadixTooltip.Arrow className="fill-neutral-700" />
                </RadixTooltip.Content>
            </RadixTooltip.Portal>
        </RadixTooltip.Root>
    </RadixTooltip.Provider>;
};