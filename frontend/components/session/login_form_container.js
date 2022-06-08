import { connect } from "react-redux";
import { login, receiveErrors, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => ({
    formType: "login",
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default LoginFormContainer;