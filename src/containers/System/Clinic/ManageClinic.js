import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ManageClinic.scss'
import { FormattedMessage } from 'react-intl'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import { CommonUtils } from '../../../utils'
import { createNewClinic } from '../../../services/userService'
import { toast } from 'react-toastify'

const mdParser = new MarkdownIt()
class ManageClinic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      imageBase64: '',
      descriptionHTML: '',
      descriptionMarkdown: '',
    }
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
    }
  }
  handleOnChangeInput = (event, id) => {
    let stateCopy = { ...this.state }
    stateCopy[id] = event.target.value
    this.setState({
      ...stateCopy,
    })
  }
  handleEditorChange = ({ html, text }) => {
    this.setState({
      descriptionHTML: html,
      descriptionMarkdown: text,
    })
  }
  handleOnChangeImage = async (event) => {
    let data = event.target.files
    let file = data[0]
    if (file) {
      let base64 = await CommonUtils.getBase64(file)
      this.setState({
        imageBase64: base64,
      })
    }
  }

  handleSaveNewClinic = async () => {
    let res = await createNewClinic(this.state)
    if (res && res.errCode === 0) {
      toast.success('Add new clinic succeeds!')
      this.setState({
        name: '',
        imageBase64: '',
        address: '',
        descriptionHTML: '',
        descriptionMarkdown: '',
      })
    } else {
      toast.error('Something wrongs...!')
      console.log('Error saveBulkScheduleDoctor >>> res', res)
    }
  }
  render() {
    return (
      <div className="manage-clinic-container">
        <div className="mc-title">Quản lý phòng khám</div>
        <div className="add-new-clinic row">
          <div className="col-6 form-group content-left">
            <label>Tên phòng khám</label>
            <input
              className="form-control"
              type="text"
              value={this.state.name}
              onChange={(event) => this.handleOnChangeInput(event, 'name')}
            />
          </div>
          <div className="col-6 form-group">
            <label className="">
              Ảnh phòng khám
              {/* <FormattedMessage id="manage-schedule.choose-date" /> */}
            </label>
            <br />
            <input
              className="form-control-file"
              type="file"
              onChange={(event) => this.handleOnChangeImage(event)}
            />
          </div>
          <div className="col-6 form-group address">
            <label>Địa chỉ phòng khám</label>
            <br />
            <input
              className="form-control"
              type="text"
              value={this.state.address}
              onChange={(event) => this.handleOnChangeInput(event, 'address')}
            />
          </div>

          <div className="col-12 ">
            <MdEditor
              style={{ height: '300px' }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={this.handleEditorChange}
              value={this.state.descriptionMarkdown}
            />
          </div>
          <div className="col-12">
            <button
              className="btn-save-specialty"
              onClick={() => this.handleSaveNewClinic()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic)
