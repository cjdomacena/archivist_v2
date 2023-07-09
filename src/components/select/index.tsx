import * as RadixSelect from '@radix-ui/react-select';
import { forwardRef } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Tooltip } from '../common/tooltip';

interface SelectProps {
    defaultValue: string,
    placeholder: string,
    label: string,
    options: {
        value: string,
        name?: string;
        tip?: string;
    }[];
    optionLabel?: {
        label: string,
        tip?: string;
    };
    handleChange: (val: string) => void;
    value: string;
}

export default function Select({ defaultValue, placeholder, label, options, optionLabel, handleChange, value }: SelectProps) {
    return <RadixSelect.Root onValueChange={e => handleChange(e)} value={value}>
        <RadixSelect.Trigger className="flex items-center gap-1 text-sm bg-neutral-800 p-2 rounded min-w-[100px] justify-between focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 capitalize" aria-label={label} defaultValue={defaultValue}>
            <RadixSelect.Value placeholder={placeholder} />
            <RadixSelect.Icon>
                <AiFillCaretDown />
            </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal className='relative bg-neutral-800 border border-neutral-700 rounded text-sm z-50'>
            <RadixSelect.Content className='min-w-[80px]' position="popper">
                <RadixSelect.Viewport>
                    <RadixSelect.Group className='capitalize'>
                        {optionLabel && <RadixSelect.Label className='p-2 text-xs text-neutral-400 flex justify-between'>{optionLabel.label}
                            {optionLabel.tip && <Tooltip description={optionLabel.tip} />}
                        </RadixSelect.Label>}
                        {options.map((option) =>
                            <RadixItem key={option.value} {...option}>
                                {option.value}
                            </RadixItem>
                        )}
                    </RadixSelect.Group>
                </RadixSelect.Viewport>
            </RadixSelect.Content>
        </RadixSelect.Portal>
    </RadixSelect.Root>;
}

const RadixItem = forwardRef<HTMLDivElement, any>(({ children, className, ...props }, ref) => {
    return <RadixSelect.Item ref={ref} className={`flex items-center justify-between w-full gap-2 focus-visible:outline-none hover:bg-neutral-700 p-2 cursor-pointer min-w-[120px] data-[state='checked']:bg-neutral-700 ${className} `} {...props}>
        <div className='flex w-full items-center gap-1 justify-between'>
            <RadixSelect.ItemText className='flex-grow '>
                {children}
            </RadixSelect.ItemText>
            {props.tip && <Tooltip description={props.tip} />}
        </div>
    </RadixSelect.Item>;
});