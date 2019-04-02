import React, { Component } from 'react'
import { connect } from 'react-redux'
import FoodCard from './FoodCard'

class FoodList extends Component {
  state = {
    foodPages: [],
    foodList: [],
    pages: 0,
    showpage: 0
  }

  componentWillReceiveProps (nextProps) {
    let pg = nextProps.countries
    const pages = Math.ceil(pg.length / 50)
    let pageArr = []

    for (let i = 0; i < pages; i++) {
      pageArr.push(pg.splice(0, 50));
    }

    this.setState({
      foodPages: pageArr,
      pages
    })
  }

  setPage = (page) => {
    this.setState({
      showpage: page
    })
  }

  render () {
    let ctPages = this.state.foodPages

    let pagelist = []
    if (this.state.pages > 1) {
      for (let i =0; i < this.state.pages; i++) {
        pagelist.push(<div key={i} onClick={() => this.setPage(i)}>{(i + 1)}</div>)
      }
    }

    return (
      <div className='search--results'>
        {this.props.message &&
          <div>{this.props.message}</div>
        }
        <div className='pagination'>{pagelist}</div>
        {ctPages.length > 0 &&
          ctPages[this.state.showpage].map((fd, ind) => {
            return (<FoodCard key={ind} food={fd} />)
          })
        }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    foods: state.foods,
    message: state.message
  })
)(FoodList)
