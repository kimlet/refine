import type { StackFrame } from "error-stack-parser";

const unrelatedFunctionName = "renderWithHooks";

export const cleanStack = (stack: StackFrame[]) => {
    const firstUnrelatedIndex = stack.findIndex(
        (frame) => frame.functionName === unrelatedFunctionName,
    );

    if (firstUnrelatedIndex !== -1) {
        stack = stack.slice(0, firstUnrelatedIndex);
    }
};
