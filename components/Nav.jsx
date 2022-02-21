import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="nav pt-3 border-bottom">
      <Link href="/" passHref>
        <h2 className="pointer" >Daniel Loos</h2>
      </Link>

      <Link href="/cv" passHref >
        <p className="ms-5 pointer lead my-auto" >CV</p>
      </Link>

      <Link href="/blog" passHref>
        <p className="ms-5 pointer lead my-auto" >Blog</p>
      </Link>

    </nav>
  )
}

export default Nav