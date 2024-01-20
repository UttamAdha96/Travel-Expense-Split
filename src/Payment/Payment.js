<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'

export const Payment = (props) => {
  return (
    <div>Payment</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

=======
import React from 'react'
import { connect } from 'react-redux'

export const Payment = (props) => {
  return (
    <div>Payment</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

>>>>>>> f996c2b38290566fd9d6c03339aaa3239cc9afcc
export default connect(mapStateToProps, mapDispatchToProps)(Payment)