const TextInput = ({
  id,
  value,
  classes,
  onChange,
  validate,
  placeholder,
  label = ""
} )=> {
  const { contClass, fieldClass, errorClass } = classes;


  return (
    <div class={contClass}>
      {label}
      <input
        id={id}
        type="text"
        value={value}
        class={fieldClass}
        onChange={onChange}
        validatge={validate}
        placeholder={placeholder}
      />
      <p class={errorClass}>// place for errors</p>
    </div>
  );
};

export default TextInput;
