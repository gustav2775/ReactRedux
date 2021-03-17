import React from "react";

export default class HeaderSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    filtersPartners(input) {
      /*   this.state.isOpen === true &&(this.props.searchAction(input))  */
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div className="header-right-search">
                <button onClick={() => this.filtersPartners()} className="header-right__search__button">
                  <i className="fas fa-search"></i>
                </button>

                {this.state.isOpen && (
                    <div className="header-right-search__drop ">
                        <input
                            className="search-drop__text"
                            type="text"
                            placeholder="Поиск"
                        />
                        <button onClick={() => this.filtersPartners()} className="search-drop__button">
                           <i className="fas fa-search"></i>
                        </button>
                    </div>
                )}
            </div>
        )
    }
}
