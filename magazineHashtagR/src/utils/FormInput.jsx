import { applyMask } from "./formValidation";

function FormInput({
  id,
  fieldName,
  fieldType,
  placeholder,
  className = "",
  register,
  errors,
  ...props
}) {
  const handleChange = (e) => {
    const maskedValue = applyMask(id, e.target.value);
    e.target.value = maskedValue;
    if (register && register.onChange) {
      register.onChange(e);
    }
  };

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {fieldName}
      </label>
      <input
        {...props}
        {...register}
        id={id}
        type={fieldType || "text"}
        placeholder={placeholder}
        onChange={handleChange}
        className="block bg-gray-200 border border-gray-300 rounded-lg text-gray-900 text-sm w-full p-2.5 placeholder-slate-500"
      />
      {errors && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
    </div>
  );
}

export default FormInput;
