// Cache gallery container
const galleryContainer = document.querySelector('.react-gallery');

// Create new array with URLs for images
let imgUrls = [
'1.jpg',
'4.jpg',
'3.jpg',
'6.jpg',
'7.jpg',
'14.jpg',
'8.jpg',
'9.jpg',
'10.jpg',
'11.jpg',
'12.jpg',
'13.jpg',
'2.jpg'];
 



// Component for gallery image
class GalleryImage extends React.Component {
  render() {
    return (
      React.createElement("img", { className: this.props.className, src: this.props.src, alt: this.props.alt }));

  }}


// Component for gallery modal
class GalleryModal extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return (
      React.createElement("div", { isOpen: this.props.isOpen, className: "modal-overlay", onClick: this.props.onClick, name: this.props.name },
      React.createElement("div", { className: "modal-body" },
      React.createElement("a", { className: "modal-close", href: "#", onClick: this.props.onClick }, React.createElement("span", { className: "fa fa-times" })),

      React.createElement("img", { src: this.props.src }))));



  }}


// Component for gallery
class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: '' };


    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    return (
      React.createElement("div", { refs: "gallery-container", className: "container-fluid gallery-container" },
      React.createElement("div", { className: "row" },

      imgUrls.map((url, index) => {
        return React.createElement("div", { className: "col-sm-6 col-md-3 col-xl-2" },
        React.createElement("div", { className: "gallery-card" },
        React.createElement(GalleryImage, { className: "gallery-thumbnail", src: url, alt: 'Image number ' + (index + 1) }),

        React.createElement("span", { className: "card-icon-open fa fa-expand", value: url, onClick: e => this.openModal(url, e) })));


      })),



      React.createElement(GalleryModal, { isOpen: this.state.showModal, onClick: this.closeModal, src: this.state.url })));


  }

  // Function for opening modal dialog
  openModal(url, e) {
    this.setState({
      showModal: true,
      url: url });

  }

  // Function for closing modal dialog
  closeModal() {
    this.setState({
      showModal: false,
      url: '' });

  }}


// Let's render the whole thing
ReactDOM.render(
React.createElement(Gallery, { imgUrls: imgUrls }),
galleryContainer);