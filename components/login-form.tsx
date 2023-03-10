import FormLayout from './form-layout';

export default function LoginForm() {
  return (
    <FormLayout>
      <fieldset>
        <legend>Login</legend>
        <label>
          Token:
          <input type="text" placeholder="Insert your token" required={true} />
        </label>

        <div>
          <button type="submit" color="blue">
            Login
          </button>
        </div>
      </fieldset>
    </FormLayout>
  );
}
