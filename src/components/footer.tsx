import logo from '../assets/logo-text.png'

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img src={logo} alt="DevStack" className="h-8 mb-4" />
            <p className="text-gray-600 text-sm mb-4">
              Explore, compare, and build the development stack that fits your next project.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>GitHub</span>
              <span>Twitter</span>
              <span>LinkedIn</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Technologies</li>
              <li className="text-gray-600 text-sm">Your Stack</li>
              <li className="text-gray-600 text-sm">Roadmap</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">About</li>
              <li className="text-gray-600 text-sm">Careers</li>
              <li className="text-gray-600 text-sm">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Privacy Policy</li>
              <li className="text-gray-600 text-sm">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} DevStack. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
