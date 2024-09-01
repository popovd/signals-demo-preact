import { Signal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

const animationSuffix = `animated-pulse`;

export default function Card({
    name,
    className,
    counter,
    signalCounter,
    useSignalValue
}: {
    name: string,
    className: string,
    counter: number,
    signalCounter?: Signal<number>,
    useSignalValue?: boolean
}) {
    console.log(name, 'render');
    const customClassName = useRef(`${className} ${animationSuffix}`);
    const containerElementRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (containerElementRef.current?.className === className) {
            containerElementRef.current.className = customClassName.current;
        }
        setTimeout(() => {
            if (containerElementRef.current) {
                containerElementRef.current.className = className;
            }
        }, 250);
    });
    return (
        <div class={customClassName.current} ref={containerElementRef}>
            <div>{name}: {counter}</div>
            {!useSignalValue && signalCounter && <div>Signal counter: {signalCounter}</div>}
            {useSignalValue && signalCounter && <div>Signal counter: {signalCounter?.value}</div>}
        </div>
    );
}