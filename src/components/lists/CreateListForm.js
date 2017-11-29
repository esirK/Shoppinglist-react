import React, {PropTypes} from 'react';
import TextInput from '../helpers/TextInput';

const CreateListForm = ({list, onChange, onSubmit, loading}) => {

    return (
        <form method="post" onSubmit={onSubmit}>
            <h1>Login to your account</h1>

            <div className="form-group col-md-10">
                <TextInput
                    value={list.title}
                    onChange={onChange}
                    placeholder="Title"
                    name="title"/>
            </div>
            <div className="form-group col-md-2">
                <button
                    className="btn btn-primary"
                    disabled={loading}
                    type="submit">
                    {loading ? 'Creating...' : 'Create'}
                </button>
            </div>
        </form>
    );
};

CreateListForm.propTypes = {
    list: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default CreateListForm;