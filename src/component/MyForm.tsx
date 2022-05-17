import React, { useState } from "react";

type Form = {
  name: string;
  description: string;
};

type MyFormProps = {
  onSubmit: (form: Form) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState<Form>({
    name: "",
    description: "",
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 여기도 모르니까 any 로 하겠습니다.
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    }); // 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
