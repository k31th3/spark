import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Label from "./Label";
import Error from "./Error";

import type {
    FormProps,
} from "./Form.types";

const Form = Object.assign(
    function Form({
        children,
        className,
        ...props
    }: FormProps) {
        return (
            <form
                className={className}
                {...props}>
                {children}
            </form>
        );
    },
    {
        Input,
        Textarea,
        Select,
        Checkbox,
        Radio,
        Label,
        Error
    }
);

export default Form;