import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-footer-bg text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-3">🇰🇷 KNC</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              한국 노마드 커뮤니티의 첫 진입점. 200+ 도시의 정보와 1,000명의 노마드를 연결합니다.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="font-bold mb-4">서비스</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
              <Link href="/explore" className="text-gray-400 hover:text-white">
                Explore
              </Link>
              <Link href="/community" className="text-gray-400 hover:text-white">
                Community
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </nav>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="font-bold mb-4">정보</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white">
                블로그
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                FAQ
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                가이드
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                문의
              </Link>
            </nav>
          </div>

          {/* Column 4 - Partnership & Language */}
          <div>
            <h4 className="font-bold mb-4">파트너십</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white">
                광고 문의
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                제휴 신청
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                API 신청
              </Link>
              <div className="mt-4 flex gap-2 text-xs">
                <button className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
                  한국어
                </button>
                <button className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
                  English
                </button>
                <button className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
                  日本語
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-6">
          {/* Social Links */}
          <div className="flex gap-6 mb-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-sm font-medium"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-sm font-medium"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-sm font-medium"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-sm font-medium"
            >
              YouTube
            </Link>
          </div>

          {/* Legal Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-4 text-xs text-gray-400">
              <Link href="#" className="hover:text-white">
                개인정보보호정책
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white">
                이용약관
              </Link>
            </div>
            <p className="text-xs text-gray-500">
              © 2024 Korean Nomad Cities. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
