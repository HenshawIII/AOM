"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navigationItems } from "@/lib/constants";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const navTextColor = isHomePage && !isScrolled ? "white" : "var(--text-secondary)";
  const navActiveColor = isHomePage && !isScrolled ? "white" : "#E3192E";
  const navBorderColor = isHomePage && !isScrolled ? "white" : "#E3192E";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/80 backdrop-blur-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo1.png" alt="AOM Industries" width={100} height={100}  />
            {/* <span className="ml-2 text-lg" style={{ color: 'var(--text-secondary)' }}>Industries</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(subItem => pathname === subItem.href));
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              
              if (hasDropdown) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                        isActive
                          ? "border-b-2"
                          : ""
                      }`}
                      style={{
                        color: isActive ? navActiveColor : navTextColor,
                        borderColor: isActive ? navBorderColor : 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = isHomePage && !isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'var(--primary)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = navTextColor;
                        }
                      }}
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {openDropdown === item.href && (
                      <div className={`absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg border py-2 z-50 ${
                        isScrolled || !isHomePage
                          ? "bg-white border-gray-200"
                          : "bg-white/95 backdrop-blur-sm border-white/20"
                      }`}>
                        {item?.dropdown?.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isSubActive
                                  ? "bg-gray-100"
                                  : "hover:bg-gray-50"
                              }`}
                              style={{
                                color: isSubActive ? 'var(--primary)' : 'var(--text-secondary)',
                              }}
                              onMouseEnter={(e) => {
                                if (!isSubActive) e.currentTarget.style.color = 'var(--primary)';
                              }}
                              onMouseLeave={(e) => {
                                if (!isSubActive) e.currentTarget.style.color = 'var(--text-secondary)';
                              }}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-b-2"
                      : ""
                  }`}
                  style={{
                    color: isActive ? navActiveColor : navTextColor,
                    borderColor: isActive ? navBorderColor : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = isHomePage && !isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'var(--primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = navTextColor;
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            style={{ color: navTextColor }}
            onMouseEnter={(e) => e.currentTarget.style.color = isHomePage && !isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'var(--primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = navTextColor}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          } ${
            isScrolled || !isHomePage
              ? "border-t border-gray-200 bg-white"
              : "border-t border-white/20 bg-white/95 backdrop-blur-sm"
          }`}
        >
          <div className="py-4">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(subItem => pathname === subItem.href));
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isDropdownOpen = openDropdown === item.href;
              
              if (hasDropdown) {
                return (
                  <div key={item.href}>
                    <button
                      className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium ${
                        isActive
                          ? "bg-gray-100"
                          : "hover:bg-gray-50"
                      }`}
                      style={{
                        color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                      }}
                      onClick={() => setOpenDropdown(isDropdownOpen ? null : item.href)}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`pl-4 border-l-2 border-gray-200 ml-3 overflow-hidden transition-all duration-300 ease-in-out ${
                        isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                        {item?.dropdown?.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-3 py-2 text-sm font-medium ${
                                isSubActive
                                  ? "bg-gray-100"
                                  : "hover:bg-gray-50"
                              }`}
                              style={{
                                color: isSubActive ? 'var(--primary)' : 'var(--text-secondary)',
                              }}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-gray-100"
                      : "hover:bg-gray-50"
                  }`}
                  style={{
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

