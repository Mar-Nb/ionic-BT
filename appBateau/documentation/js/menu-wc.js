'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">appBateau documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-19b4ef017e288768a5b546523ad5447c"' : 'data-target="#xs-components-links-module-AppModule-19b4ef017e288768a5b546523ad5447c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-19b4ef017e288768a5b546523ad5447c"' :
                                            'id="xs-components-links-module-AppModule-19b4ef017e288768a5b546523ad5447c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateauPageModule.html" data-type="entity-link">BateauPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateauPageModule-b05f495ef9f48d423c7dc5c54757ff7e"' : 'data-target="#xs-components-links-module-BateauPageModule-b05f495ef9f48d423c7dc5c54757ff7e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateauPageModule-b05f495ef9f48d423c7dc5c54757ff7e"' :
                                            'id="xs-components-links-module-BateauPageModule-b05f495ef9f48d423c7dc5c54757ff7e"' }>
                                            <li class="link">
                                                <a href="components/BateauPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateauPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateauPageRoutingModule.html" data-type="entity-link">BateauPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartModalPageModule.html" data-type="entity-link">CartModalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CartModalPageModule-376fd915860705fef4069205eca2608f"' : 'data-target="#xs-components-links-module-CartModalPageModule-376fd915860705fef4069205eca2608f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartModalPageModule-376fd915860705fef4069205eca2608f"' :
                                            'id="xs-components-links-module-CartModalPageModule-376fd915860705fef4069205eca2608f"' }>
                                            <li class="link">
                                                <a href="components/CartModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartModalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartModalPageRoutingModule.html" data-type="entity-link">CartModalPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactPageModule.html" data-type="entity-link">ContactPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactPageModule-b9f09c6a18fc637d21eeb83f5b4f5321"' : 'data-target="#xs-components-links-module-ContactPageModule-b9f09c6a18fc637d21eeb83f5b4f5321"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactPageModule-b9f09c6a18fc637d21eeb83f5b4f5321"' :
                                            'id="xs-components-links-module-ContactPageModule-b9f09c6a18fc637d21eeb83f5b4f5321"' }>
                                            <li class="link">
                                                <a href="components/ContactPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactPageRoutingModule.html" data-type="entity-link">ContactPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DetailBateauPageModule.html" data-type="entity-link">DetailBateauPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailBateauPageModule-42d9a466fbe813903bcbcc8390fd827d"' : 'data-target="#xs-components-links-module-DetailBateauPageModule-42d9a466fbe813903bcbcc8390fd827d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailBateauPageModule-42d9a466fbe813903bcbcc8390fd827d"' :
                                            'id="xs-components-links-module-DetailBateauPageModule-42d9a466fbe813903bcbcc8390fd827d"' }>
                                            <li class="link">
                                                <a href="components/DetailBateauPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailBateauPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetailBateauPageRoutingModule.html" data-type="entity-link">DetailBateauPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DetailRecettePageModule.html" data-type="entity-link">DetailRecettePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailRecettePageModule-4f672f1b83aee0e4f9b52976e337c07f"' : 'data-target="#xs-components-links-module-DetailRecettePageModule-4f672f1b83aee0e4f9b52976e337c07f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailRecettePageModule-4f672f1b83aee0e4f9b52976e337c07f"' :
                                            'id="xs-components-links-module-DetailRecettePageModule-4f672f1b83aee0e4f9b52976e337c07f"' }>
                                            <li class="link">
                                                <a href="components/DetailRecettePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailRecettePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetailRecettePageRoutingModule.html" data-type="entity-link">DetailRecettePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DetailRestaurantPageModule.html" data-type="entity-link">DetailRestaurantPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailRestaurantPageModule-7528b6c75d7b31ef8d5f5854729ea068"' : 'data-target="#xs-components-links-module-DetailRestaurantPageModule-7528b6c75d7b31ef8d5f5854729ea068"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailRestaurantPageModule-7528b6c75d7b31ef8d5f5854729ea068"' :
                                            'id="xs-components-links-module-DetailRestaurantPageModule-7528b6c75d7b31ef8d5f5854729ea068"' }>
                                            <li class="link">
                                                <a href="components/DetailRestaurantPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailRestaurantPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetailRestaurantPageRoutingModule.html" data-type="entity-link">DetailRestaurantPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderPageModule.html" data-type="entity-link">HeaderPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderPageModule-3704161c43647632a70facae21fb3956"' : 'data-target="#xs-components-links-module-HeaderPageModule-3704161c43647632a70facae21fb3956"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderPageModule-3704161c43647632a70facae21fb3956"' :
                                            'id="xs-components-links-module-HeaderPageModule-3704161c43647632a70facae21fb3956"' }>
                                            <li class="link">
                                                <a href="components/HeaderPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderPageRoutingModule.html" data-type="entity-link">HeaderPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-51de53bdc117ba549f4b8498f8d0494c"' : 'data-target="#xs-components-links-module-HomePageModule-51de53bdc117ba549f4b8498f8d0494c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-51de53bdc117ba549f4b8498f8d0494c"' :
                                            'id="xs-components-links-module-HomePageModule-51de53bdc117ba549f4b8498f8d0494c"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link">HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IntrouvablePageModule.html" data-type="entity-link">IntrouvablePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IntrouvablePageModule-0c8fba384463063ffe03397f5538e286"' : 'data-target="#xs-components-links-module-IntrouvablePageModule-0c8fba384463063ffe03397f5538e286"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IntrouvablePageModule-0c8fba384463063ffe03397f5538e286"' :
                                            'id="xs-components-links-module-IntrouvablePageModule-0c8fba384463063ffe03397f5538e286"' }>
                                            <li class="link">
                                                <a href="components/IntrouvablePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntrouvablePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntrouvablePageRoutingModule.html" data-type="entity-link">IntrouvablePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductFormPageModule.html" data-type="entity-link">ProductFormPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductFormPageModule-c45f0899b7221c1fa39fa8f02980aa8a"' : 'data-target="#xs-components-links-module-ProductFormPageModule-c45f0899b7221c1fa39fa8f02980aa8a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductFormPageModule-c45f0899b7221c1fa39fa8f02980aa8a"' :
                                            'id="xs-components-links-module-ProductFormPageModule-c45f0899b7221c1fa39fa8f02980aa8a"' }>
                                            <li class="link">
                                                <a href="components/ProductFormPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductFormPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductFormPageRoutingModule.html" data-type="entity-link">ProductFormPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductListPageModule.html" data-type="entity-link">ProductListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductListPageModule-b727ba926cc17f28197f05c82efcfa3c"' : 'data-target="#xs-components-links-module-ProductListPageModule-b727ba926cc17f28197f05c82efcfa3c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductListPageModule-b727ba926cc17f28197f05c82efcfa3c"' :
                                            'id="xs-components-links-module-ProductListPageModule-b727ba926cc17f28197f05c82efcfa3c"' }>
                                            <li class="link">
                                                <a href="components/ProductListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductListPageRoutingModule.html" data-type="entity-link">ProductListPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductSinglePageModule.html" data-type="entity-link">ProductSinglePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductSinglePageModule-b122bda90aa4bbb61259f70b6c60d86a"' : 'data-target="#xs-components-links-module-ProductSinglePageModule-b122bda90aa4bbb61259f70b6c60d86a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductSinglePageModule-b122bda90aa4bbb61259f70b6c60d86a"' :
                                            'id="xs-components-links-module-ProductSinglePageModule-b122bda90aa4bbb61259f70b6c60d86a"' }>
                                            <li class="link">
                                                <a href="components/ProductSinglePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductSinglePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductSinglePageRoutingModule.html" data-type="entity-link">ProductSinglePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RecettePageModule.html" data-type="entity-link">RecettePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RecettePageModule-811eb66e836f584bed540cece35b7803"' : 'data-target="#xs-components-links-module-RecettePageModule-811eb66e836f584bed540cece35b7803"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RecettePageModule-811eb66e836f584bed540cece35b7803"' :
                                            'id="xs-components-links-module-RecettePageModule-811eb66e836f584bed540cece35b7803"' }>
                                            <li class="link">
                                                <a href="components/RecettePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecettePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecettePageRoutingModule.html" data-type="entity-link">RecettePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RestaurantPageModule.html" data-type="entity-link">RestaurantPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RestaurantPageModule-a8c89cff795dc4c2235df686a6029162"' : 'data-target="#xs-components-links-module-RestaurantPageModule-a8c89cff795dc4c2235df686a6029162"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RestaurantPageModule-a8c89cff795dc4c2235df686a6029162"' :
                                            'id="xs-components-links-module-RestaurantPageModule-a8c89cff795dc4c2235df686a6029162"' }>
                                            <li class="link">
                                                <a href="components/RestaurantPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RestaurantPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RestaurantPageRoutingModule.html" data-type="entity-link">RestaurantPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SigninPageModule.html" data-type="entity-link">SigninPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SigninPageModule-043ba3219eb89e26991665fd52c6b49c"' : 'data-target="#xs-components-links-module-SigninPageModule-043ba3219eb89e26991665fd52c6b49c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SigninPageModule-043ba3219eb89e26991665fd52c6b49c"' :
                                            'id="xs-components-links-module-SigninPageModule-043ba3219eb89e26991665fd52c6b49c"' }>
                                            <li class="link">
                                                <a href="components/SigninPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SigninPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SigninPageRoutingModule.html" data-type="entity-link">SigninPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyEmailPageModule.html" data-type="entity-link">VerifyEmailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerifyEmailPageModule-693ff51b282c2accacf2a76e476879ec"' : 'data-target="#xs-components-links-module-VerifyEmailPageModule-693ff51b282c2accacf2a76e476879ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerifyEmailPageModule-693ff51b282c2accacf2a76e476879ec"' :
                                            'id="xs-components-links-module-VerifyEmailPageModule-693ff51b282c2accacf2a76e476879ec"' }>
                                            <li class="link">
                                                <a href="components/VerifyEmailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyEmailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyEmailPageRoutingModule.html" data-type="entity-link">VerifyEmailPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/FormRestaurantComponent.html" data-type="entity-link">FormRestaurantComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link">Product</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BateauService.html" data-type="entity-link">BateauService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductListService.html" data-type="entity-link">ProductListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecetteService.html" data-type="entity-link">RecetteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RestaurantService.html" data-type="entity-link">RestaurantService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ItemCart.html" data-type="entity-link">ItemCart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});