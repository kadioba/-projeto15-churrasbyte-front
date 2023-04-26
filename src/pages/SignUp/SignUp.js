import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { SignUpContainer, SignUpForm, SubmitButton } from "./styled";

export default function SignUp() {
    const { form, handleForm } = useForm({ name: "", email: "", password: "", confirmPassword: "" });

    function submitSignUp(e) {
        e.preventDefault();
        if(form.password !== form.confirmPassword) return alert("As senhas precisam ser iguais.")

        delete form.confirmPassword;
        console.log(form)
        //Enviar para o back
    }

    return (
        <SignUpContainer>
            <h1>CRIAR CONTA</h1>
            <SignUpForm onSubmit={submitSignUp}>
                <input
                    required
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                />
                <input
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                />
                <input
                    required
                    minLength={3}
                    type="password"
                    autoComplete="new-password"
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                />
                <input
                    required
                    minLength={3}
                    type="password"
                    autoComplete="new-password"
                    placeholder="Confirme a senha"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleForm}
                />
                <SubmitButton type="submit">Cadastrar</SubmitButton>
            </SignUpForm>

            <Link to="/login">
                Já tem uma conta? Entre!
            </Link>

        </SignUpContainer>
    )
}