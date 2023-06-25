import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: [],
    isVisible: false,
  };

  componentDidUpdate = (_, prevState) => {
    const { searchValue, page } = this.state;
    if (prevState.searchValue !== searchValue || prevState.page !== page)
      this.getImages(searchValue, page);
  };

  onSubmit = value => {
    this.setState({ searchValue: value, page: 1, images: [] });
  };

  getImages = async (query, page) => {
    try {
      const {
        photos,
        total_results,
        page: currentPage,
        per_page,
      } = await ImageService.getImages(query, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...photos],
        isVisible: currentPage < Math.ceil(total_results / per_page),
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  onClickButtonLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isVisible } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        {images.length === 0 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        <Grid>
          {images.length > 0 &&
            images.map(({ id, alt, src, avg_color }) => {
              return (
                <GridItem key={id}>
                  <CardItem color={avg_color}>
                    <img src={src.large} alt={alt} />
                  </CardItem>
                </GridItem>
              );
            })}
        </Grid>
        {isVisible && (
          <Button type="button" onClick={this.onClickButtonLoadMore}>
            Load More
          </Button>
        )}
      </>
    );
  }
}
