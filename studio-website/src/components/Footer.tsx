

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} 我的工作室. All rights reserved.</p>
        <p>
          <a href="https://shop.taobao.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">淘宝店铺</a> |
          <a href="#" className="text-white mx-2">微信 (Placeholder)</a> |
          <a href="#" className="text-white mx-2">联系我们</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
