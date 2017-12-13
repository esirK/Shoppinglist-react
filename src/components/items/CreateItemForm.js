import React, {PropTypes} from 'react';
import TextInput from '../helperComponents/TextInput';

const CreateItemForm = ({item, onChange, onSubmit, loading}) => {

    return (
        <form method="post" onSubmit={onSubmit}>
            <div className="form-group col-md-5">
                <TextInput
                    value={item.name}
                    onChange={onChange}
                    placeholder="Item name"
                    name="name"/>
            </div>
            <div className="form-group col-md-2">
                <TextInput
                    type="number"
                    step="0.1"
                    value={item.price}
                    onChange={onChange}
                    placeholder="Price"
                    name="price"/>
            </div>
            <div className="form-group col-md-3">
                <TextInput
                    type="number"
                    step="0.1"
                    value={item.quantity}
                    onChange={onChange}
                    placeholder="Quantity"
                    name="quantity"/>
            </div>
            <div className="form-group col-md-2">
                <input
                    className="btn btn-primary"
                    disabled={loading}
                    type="submit"
                    value={loading ? 'Creating...' : 'Create Item'}
                />
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