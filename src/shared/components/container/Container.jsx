import style from './Container.module.scss'
function Container({ children }) {
	return <div className={style.container}>{children}</div>
}

export default Container
