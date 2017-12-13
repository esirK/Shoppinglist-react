import React, {PropTypes} from 'react';
import TextInput from '../helpers/TextInput';

const CreateListForm = ({list, onChange, onSubmit, loading}) => {

    return (
        <form method="post" onSubmit={onSubmit}>

            <div className="form-group col-md-10">
                <TextInput
                    value={list.title}
                    onChange={onChange}
                    placeholder="Title"
                    name="title"/>
            </div>
            <div className="form-group col-md-2">
                <input
                    className="btn btn-primary"
                    disabled={loading}
                    type="submit"
                    value={loading ? 'Creating...' : 'Create'}
                />
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