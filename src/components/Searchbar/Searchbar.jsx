import { useState } from 'react';
import toast from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.target.value);

  const  handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast('Please enter a query!', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FcSearch size="30" />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};

// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };
//   handleChange = e => {
//     this.setState({ query: e.target.value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.query.trim() === '') {
//       return toast('Please enter a query!', {
//         icon: '👏',
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//     }
//     this.props.onSubmit(this.state.query);
//     this.setState({ query: '' });
//   };
//   render() {
//     return (
//       <Header>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchFormButton type="submit">
//             <FcSearch size="30" />
//             <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//           </SearchFormButton>

//           <SearchFormInput
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.handleChange}
//           />
//         </SearchForm>
//       </Header>
//     );
//   }
// }
