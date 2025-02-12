type Route = {
  path: string;
  view: () => string;
};

export class Router {
  private static instance: Router;
  private routes: Route[] = [];
  private currentPath: string = '';

  private constructor() {
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });
  }

  public static getInstance(): Router {
    if (!Router.instance) {
      Router.instance = new Router();
    }
    return Router.instance;
  }

  public addRoute(path: string, view: () => string): void {
    this.routes.push({ path, view });
  }

  public navigateTo(path: string): void {
    window.history.pushState(null, '', path);
    this.handleRoute();
  }

  public getCurrentPath(): string {
    return window.location.pathname;
  }

  public handleRoute(): void {
    this.currentPath = this.getCurrentPath();
    const matchedRoute = this.routes.find(route => route.path === this.currentPath) 
      || this.routes.find(route => route.path === '/auth/signin'); // Default route updated

    if (matchedRoute) {
      const content = matchedRoute.view();
      const appElement = document.querySelector<HTMLDivElement>('#app');
      if (appElement) {
        appElement.innerHTML = content;
      }
    } else {
      // Redirect to signin if no route matches
      this.navigateTo('/auth/signin');
    }
  }

  public init(): void {
    // Handle click events on links
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.matches('[data-link]')) {
        e.preventDefault();
        this.navigateTo(target.getAttribute('href') || '/auth/signin');
      }
    });

    // Handle initial route
    this.handleRoute();
  }
}
