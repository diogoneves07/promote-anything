import FormLayout from './form-layout';

export default function RegisterForm() {
  return (
    <FormLayout>
      <fieldset>
        <legend>Register</legend>
        <label>
          Token:
          <input
            type="password"
            placeholder="Insert your token"
            required={true}
          />
        </label>

        <div>
          <button type="submit" color="green">
            Create account
          </button>
        </div>
      </fieldset>
    </FormLayout>
  );
}
