import React from 'react';
import {Link} from 'react-router';

class Lists extends React.Component{
    render(){
        return(
            <div class="mid-center">
                <h3>My shopping-lists</h3>
                <div id="shoppinglist">
                    <form method="post" action="/update/shopping-list">
                        <br />
                        <br />
                        <br />
                        <table class="ui celled table" id="shoppinglistTable"></table>
                    </form>
                    <br />
                    <br />
                    <form method="post" action="/create/shopping-list" class="add-shoppinglist">
                        <h4>Add shoppinglist</h4>
                        <div class="form-group col-md-10">
                            <input type="text" name="title" class="form-control" value=""
                                   aria-required="true" required placeholder="New shoppinglist" />
                        </div>
                        <div class="form-group col-md-2">
                            <input class="btn btn-primary">+ Add</input>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Lists;