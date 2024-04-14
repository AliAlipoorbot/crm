import FormInput from "./FormInput";
import ItemList from "./ItemList";

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <FormInput
        label="Name"
        type="text"
        name="name"
        value={form.name}
        onChange={changeHandler}
      />
      <FormInput
        label="Last Name"
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={changeHandler}
      />
      <FormInput
        label="Email"
        type="text"
        name="email"
        value={form.email}
        onChange={changeHandler}
      />
      <FormInput
        label="Phone"
        type="tel"
        name="phone"
        value={form.phone}
        onChange={changeHandler}
      />
      <FormInput
        label="Address"
        type="text"
        name="address"
        value={form.address}
        onChange={changeHandler}
      />
      <FormInput
        label="Postal Code"
        type="text"
        name="postalCode"
        value={form.postalCode}
        onChange={changeHandler}
      />
      <FormInput
        label="Date"
        type="date"
        name="date"
        value={form.date}
        onChange={changeHandler}
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
