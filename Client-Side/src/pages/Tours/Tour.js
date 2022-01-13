function Tour() {
	return (
		<div>
			<header className="header">
				<nav className="nav nav--tours">
					<a href="/overview.html" className="nav__el">
						All tours
					</a>
					<form className="nav__search">
						<button className="nav__search-btn">
							<svg>
								<use xlinkHref="assets/img/icons.svg#icon-search" />
							</svg>
						</button>
						<input
							type="text"
							placeholder="Search tours"
							className="nav__search-input"
						/>
					</form>
				</nav>
				<div className="header__logo">
					<img src="assets/img/logo-white.png" alt="Natours logo" />
				</div>
				<nav className="nav nav--user">
					<a href="#" className="nav__el">
						My bookings
					</a>
					<button className="nav__el">Log out</button>
					<a href="#" className="nav__el">
						<img
							src="./assets/img/users/user-3.jpg"
							alt="User photo"
							className="nav__user-img"
						/>
						<span>Username</span>
					</a>
					{/*
              <button class="nav__el">Log in</button>
              <button class="nav__el nav__el--cta">Sign up</button>
              */}
				</nav>
			</header>
			<section className="section-header">
				<div className="header__herp">
					<div className="header__hero-overlay">&nbsp;</div>
					<img
						src="assets/img/tours/tour-2-cover.jpg"
						alt=""
						className="header__hero-image"
					/>
				</div>
				<div className="heading-box">
					<h1 className="heading-primary">
						<span>
							The Park <br />
							Camper Tour
						</span>
					</h1>
					<div className="heading-box__group">
						<div className="heading-box__detail">
							<svg className="heading-box__icon">
								<use xlinkHref="assets/img/icons.svg#icon-clock" />
							</svg>
							<span className="heading-box__text">10 days</span>
						</div>
						<div className="heading-box__detail">
							<svg className="heading-box__icon">
								<use xlinkHref="assets/img/icons.svg#icon-map-pin" />
							</svg>
							<span className="heading-box__text">Las Vegas, USA</span>
						</div>
					</div>
				</div>
			</section>
			<section className="section-description">
				<div className="overview-box">
					<div>
						<div className="overview-box__group">
							<h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
							<div className="overview-box__detail">
								<svg className="overview-box__icon">
									<use xlinkHref="assets/img/icons.svg#icon-calendar" />
								</svg>
								<span className="overview-box__label">Next date</span>
								<span className="overview-box__text">August 2021</span>
							</div>
							<div className="overview-box__detail">
								<svg className="overview-box__icon">
									<use xlinkHref="assets/img/icons.svg#icon-trending-up" />
								</svg>
								<span className="overview-box__label">Difficulty</span>
								<span className="overview-box__text">Medium</span>
							</div>
							<div className="overview-box__detail">
								<svg className="overview-box__icon">
									<use xlinkHref="assets/img/icons.svg#icon-user" />
								</svg>
								<span className="overview-box__label">Participants</span>
								<span className="overview-box__text">10 people</span>
							</div>
							<div className="overview-box__detail">
								<svg className="overview-box__icon">
									<use xlinkHref="assets/img/icons.svg#icon-star" />
								</svg>
								<span className="overview-box__label">Rating</span>
								<span className="overview-box__text">4.9 / 5</span>
							</div>
						</div>
						<div className="overview-box__group">
							<h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
							<div className="overview-box__detail">
								<img
									src="assets/img/users/user-19.jpg"
									alt="Lead guide"
									className="overview-box__img"
								/>
								<span className="overview-box__label">Lead guide</span>
								<span className="overview-box__text">Steven Miller</span>
							</div>
							<div className="overview-box__detail">
								<img
									src="assets/img/users/user-18.jpg"
									alt="Tour guide"
									className="overview-box__img"
								/>
								<span className="overview-box__label">Tour guide</span>
								<span className="overview-box__text">Lisa Brown</span>
							</div>
							<div className="overview-box__detail">
								<img
									src="assets/img/users/user-17.jpg"
									alt="Intern"
									className="overview-box__img"
								/>
								<span className="overview-box__label">Intern</span>
								<span className="overview-box__text">Max Smith</span>
							</div>
						</div>
					</div>
				</div>
				<div className="description-box">
					<h2 className="heading-secondary ma-bt-lg">
						About the park camper tour
					</h2>
					<p className="description__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</p>
					<p className="description__text">
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum!
					</p>
				</div>
			</section>
			<section className="section-pictures">
				<div className="picture-box">
					<img
						className="picture-box__img picture-box__img--1"
						src="./assets/img/tours/tour-1-1.jpg"
						alt="The Park Camper Tour 1"
					/>
				</div>
				<div className="picture-box">
					<img
						className="picture-box__img picture-box__img--2"
						src="./assets/img/tours/tour-1-2.jpg"
						alt="The Park Camper Tour 1"
					/>
				</div>
				<div className="picture-box">
					<img
						className="picture-box__img picture-box__img--3"
						src="./assets/img/tours/tour-1-3.jpg"
						alt="The Park Camper Tour 1"
					/>
				</div>
			</section>
			<section className="section-map">
				<div id="map" />
			</section>
			<section className="section-reviews">
				<div className="reviews">
					<div className="reviews__card">
						<div className="reviews__avatar">
							<img
								src="assets/img/users/user-7.jpg"
								alt="Jim Brown"
								className="reviews__avatar-img"
							/>
							<h6 className="reviews__user">Jim Brown</h6>
						</div>
						<p className="reviews__text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							dignissimos sint quo commodi corrupti accusantium veniam saepe
							numquam.
						</p>
						<div className="reviews__rating">
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="./assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="./assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="./assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="./img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="./assets/img/icons.svg#icon-star" />
							</svg>
						</div>
					</div>
					<div className="reviews__card">
						<div className="reviews__avatar">
							<img
								src="assets/img/users/user-14.jpg"
								alt="Laura Wilson"
								className="reviews__avatar-img"
							/>
							<h6 className="reviews__user">Laura Wilson</h6>
						</div>
						<p className="reviews__text">
							Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
							reiciendis provident deleniti cumque similique itaque animi,
							sapiente obcaecati beatae accusantium.
						</p>
						<div className="reviews__rating">
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--inactive">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
						</div>
					</div>
					<div className="reviews__card">
						<div className="reviews__avatar">
							<img
								src="assets/img/users/user-15.jpg"
								alt="Ben Hadley"
								className="reviews__avatar-img"
							/>
							<h6 className="reviews__user">Ben Hadley</h6>
						</div>
						<p className="reviews__text">
							Debitis, nesciunt itaque! At quis officia natus. Suscipit,
							reprehenderit blanditiis mollitia distinctio ducimus porro tempore
							perspiciatis sunt vel.
						</p>
						<div className="reviews__rating">
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
						</div>
					</div>
					<div className="reviews__card">
						<div className="reviews__avatar">
							<img
								src="assets/img/users/user-6.jpg"
								alt="Alexander Jones"
								className="reviews__avatar-img"
							/>
							<h6 className="reviews__user">Alexander Jones</h6>
						</div>
						<p className="reviews__text">
							Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam
							quis praesentium sed inventore harum aliquam veritatis at adipisci
							ea assumenda!
						</p>
						<div className="reviews__rating">
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
						</div>
					</div>
					<div className="reviews__card">
						<div className="reviews__avatar">
							<img
								src="assets/img/users/user-3.jpg"
								alt="Ayla Cornell"
								className="reviews__avatar-img"
							/>
							<h6 className="reviews__user">Ayla Cornell</h6>
						</div>
						<p className="reviews__text">
							Perferendis quo aliquid iste quas laboriosam molestias illo est
							voluptatem odit ea. Vero placeat culpa provident dicta maiores!
						</p>
						<div className="reviews__rating">
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
							<svg className="reviews__star reviews__star--active">
								<use xlinkHref="assets/img/icons.svg#icon-star" />
							</svg>
						</div>
					</div>
				</div>
			</section>
			<section className="section-cta">
				<div className="cta">
					<div className="cta__img cta__img--logo">
						<img src="assets/img/logo-white.png" alt="Natours logo" className />
					</div>
					<img
						src="./assets/img/tours/tour-1-1.jpg"
						alt=""
						className="cta__img cta__img--1"
					/>
					<img
						src="./assets/img/tours/tour-1-2.jpg"
						alt=""
						className="cta__img cta__img--2"
					/>
					<div className="cta__content">
						<h2 className="heading-secondary">What are you waiting for?</h2>
						<p className="cta__text">
							10 days. 1 adventure. Infinite memories. Make it yours today!
						</p>
						<button className="btn btn--green span-all-rows">
							Book tour now!
						</button>
					</div>
				</div>
			</section>
			<div className="footer">
				<div className="footer__logo">
					<img src="assets/img/logo-green.png" alt="Natours logo" />
				</div>
				<ul className="footer__nav">
					<li>
						<a href="#">About us</a>
					</li>
					<li>
						<a href="#">Download apps</a>
					</li>
					<li>
						<a href="#">Become a guide</a>
					</li>
					<li>
						<a href="#">Careers</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Tour;
