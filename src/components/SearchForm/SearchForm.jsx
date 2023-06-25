import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    searchValue: '',
  };

  onChange = evt => {
    this.setState({ searchValue: evt.target.value.toLowerCase().trim() });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <SearchFormStyled onSubmit={this.onSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={searchValue}
          onChange={this.onChange}
        />
      </SearchFormStyled>
    );
  }
}
