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
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">mean-course documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AngularMaterialModule.html" data-type="entity-link">AngularMaterialModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-2662954c9ecf811fce5edb8ba5236b66"' : 'data-target="#xs-components-links-module-AppModule-2662954c9ecf811fce5edb8ba5236b66"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-2662954c9ecf811fce5edb8ba5236b66"' : 'id="xs-components-links-module-AppModule-2662954c9ecf811fce5edb8ba5236b66"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AuthModule-07345cf40ae5df6fb6ee8efdb620cd73"' : 'data-target="#xs-components-links-module-AuthModule-07345cf40ae5df6fb6ee8efdb620cd73"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AuthModule-07345cf40ae5df6fb6ee8efdb620cd73"' : 'id="xs-components-links-module-AuthModule-07345cf40ae5df6fb6ee8efdb620cd73"' }>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PostsModule.html" data-type="entity-link">PostsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PostsModule-234877cf797b4343ee10665d0f3d0463"' : 'data-target="#xs-components-links-module-PostsModule-234877cf797b4343ee10665d0f3d0463"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PostsModule-234877cf797b4343ee10665d0f3d0463"' : 'id="xs-components-links-module-PostsModule-234877cf797b4343ee10665d0f3d0463"' }>
                                        <li class="link">
                                            <a href="components/PostCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostCreateComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostListComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                    </li>
                    <li class="link">
                        <a href="classes/FeatureCollection.html" data-type="entity-link">FeatureCollection</a>
                    </li>
                    <li class="link">
                        <a href="classes/GeoJson.html" data-type="entity-link">GeoJson</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MapService.html" data-type="entity-link">MapService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PostsService.html" data-type="entity-link">PostsService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"' }>
                <span class="icon ion-ios-swap"></span>
                <span>Interceptors</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                    <li class="link">
                        <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/ErrorInterceptor.html" data-type="entity-link">ErrorInterceptor</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/AuthData.html" data-type="entity-link">AuthData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IGeoJson.html" data-type="entity-link">IGeoJson</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IGeometry.html" data-type="entity-link">IGeometry</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Post.html" data-type="entity-link">Post</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
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
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
