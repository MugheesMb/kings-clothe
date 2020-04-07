const INITIAL_STATE ={
    sections : [
        {
            id: 1 ,
            title: 'Hats',
            imageUrl: 'https://i.pinimg.com/564x/48/e8/4d/48e84de18834552d434380975f8c1839.jpg',
            linkUrl: 'shop/hats'
        },
        {
            id: 2 ,
            title: 'Shoes',
            imageUrl: 'https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80x',
            linkUrl: 'shop/sneakers'
        },
        {
            id: 3 ,
            title: 'Jackets',
            imageUrl: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80',
            linkUrl: 'shop/jackets'
        },
        {
            id: 4 ,
            title: 'Mens',
            size : 'large',
            imageUrl: 'https://d2z1w4aiblvrwu.cloudfront.net/ad/7Zex/warm-bodies-blu-ray-and-dvd-large-1.jpg',
            linkUrl: 'shop/mens'
        },
        {
            id: 5 ,
            title: 'Womens',
            size : 'large',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            linkUrl: 'shop/womens'
        }
        
    ]

};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;