import React, { FC} from 'react';
interface DefaultInputProps {
  type: string;
  title: string;
  name: string;
  placeHolder: string;
  value: string;
  change:any;
  blur:any;
}
const DefaultInput: FC<DefaultInputProps> = (props) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {props.title}
      </label>
      <input className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-1.5" autoComplete='on'type={props.type} name={props.name} placeholder={props.placeHolder} value={props.value} onChange={props.change} onBlur={props.blur}/>
    </div>
  );
};
export default DefaultInput;