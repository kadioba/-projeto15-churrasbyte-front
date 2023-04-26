import useForm from "../../hooks/useForm"
import { Link } from "react-router-dom"
import { LoginContainer, LoginForm, SubmitButton } from "./styled"

export default function Login() {
    const { form, handleForm } = useForm({ name: "", email: "", password: "", confirmPassword: "" });

    function submitSignUp(e) {
        e.preventDefault();
        if (form.password !== form.confirmPassword) return alert("As senhas precisam ser iguais.")

        delete form.confirmPassword;
        console.log(form)
        //Enviar para o back
    }

    return (
        <LoginContainer>
            <h1>FAZER LOGIN</h1>
            <LoginForm onSubmit={submitSignUp}>
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
                    type="password"
                    autoComplete="new-password"
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                />

                <SubmitButton type="submit">Entrar</SubmitButton>
            </LoginForm>

            <Link to="/sign-up">
                Novo no ChurrasByte? CADASTRE-SE
            </Link>
        </LoginContainer>
    )
}