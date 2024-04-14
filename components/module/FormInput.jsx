function FormInput({ name, label, value, type, onChange }) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} id={name} />
    </div>
  );
}

export default FormInput;
