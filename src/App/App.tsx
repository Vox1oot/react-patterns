import Form from '../patterns/CompundedComponents/Form';
import styles from './App.module.css';

const App = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>React patterns</h1>
            <div className={styles.formWrapper}>
                <p>Compounded components</p>
                <Form theme={{ color: 'red' }}>
                    <Form.InputPassword />
                    <Form.InputLogin />
                    <Form.Submit />
                </Form>
            </div>
        </main>
    );
};

export default App;
