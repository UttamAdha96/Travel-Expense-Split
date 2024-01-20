import React from 'react'
import { connect } from 'react-redux'

export const Payment = (props) => {
  return (
    <div>Payment</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)