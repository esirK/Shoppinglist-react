import React, {PropTypes} from 'react';
import TextInput from '../helpers/TextInput';

const CreateItemForm = ({item, onChange, onSubmit, loading}) => {

    return (
        <form method="post" onSubmit={onSubmit}>
            <div className="form-group col-md-10">
                <TextInput
                    value={item.name}
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

CreateItemForm.propTypes = {
    item: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default CreateItemForm;