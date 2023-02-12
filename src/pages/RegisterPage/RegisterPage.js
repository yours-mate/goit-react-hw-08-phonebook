import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { authOperations } from '../../redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" />
        </label>

        <label style={styles.label}>
          Email
          <input type="email" name="email" />
        </label>

        <label style={styles.label}>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
