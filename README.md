# Yukie Natori Beauty Salon - Frontend Clone

A beautiful, responsive frontend clone of the Yukie Natori New York salon website built with React and Vite.

## 🌟 Features

- **Modern React Architecture**: Built with React 18 and Vite for fast development and optimal performance
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Multiple Pages**:
  - Home page with all services overview
  - Head Spa services page
  - Spa Services & Massage page
  - Facial Treatments page
  - Complete Price List
- **Beautiful UI Components**:
  - Professional navigation header with dropdown menus
  - Service cards with hover effects
  - Booking form component
  - Footer with contact information and social links
  - Hero sections for each page
- **Clean Code**: Well-organized component structure with separate CSS files

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **React Router DOM**: Client-side routing
- **Vite**: Next-generation frontend tooling
- **CSS3**: Custom styling with CSS variables and responsive design

## 📦 Project Structure

```
beauty-salon/
├── src/
│   ├── components/
│   │   ├── Header.jsx / Header.css
│   │   ├── Footer.jsx / Footer.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── ServiceCard.jsx / ServiceCard.css
│   │   └── BookingForm.jsx / BookingForm.css
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── HeadSpa.jsx / HeadSpa.css
│   │   ├── SpaServices.jsx / SpaServices.css
│   │   ├── Facial.jsx / Facial.css
│   │   └── PriceList.jsx / PriceList.css
│   ├── styles/
│   │   ├── variables.css
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd beauty-salon
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Features

### Color Palette
- **Primary Color**: `#4A4A3A` (Dark brown/gray)
- **Secondary Color**: `#6B6B5A` (Medium gray)
- **Accent Color**: `#D4AF37` (Gold)
- **Background**: `#FFFFFF` (White)
- **Background Gray**: `#F5F5F5` (Light gray)

### Typography
- **Font Family**: Helvetica Neue, Helvetica, Arial, sans-serif
- **Responsive sizing** using clamp() for fluid typography

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📄 Pages

### Home Page
- Hero section with call-to-action
- About Yukie Natori section
- Services overview grid
- Featured treatments
- Media mentions
- Virtual tour section
- Latest blog posts
- Booking form
- Location information

### Head Spa Page
- Detailed service descriptions
- Benefits of head spa treatments
- Pricing for different packages
- FAQ section
- Video showcase area

### Spa Services Page
- Comprehensive massage therapy options
- Body treatments (float therapy, scrubs, wraps)
- Waxing services
- Benefits of spa treatments

### Facial Page
- Facial treatment options
- Oxygen facial benefits
- Eyelash extension pricing tables
- Skin concerns addressed

### Price List Page
- Complete pricing for all services
- Laser treatments
- Hair services
- Nail services
- Massage therapy
- Facial treatments
- Body treatments
- Waxing services
- Policies and payment information

## 🎯 Future Enhancements

- Add more service pages (Nail, Hair, Laser Skin, etc.)
- Implement shopping functionality
- Add blog section with full articles
- Integrate online booking system with backend
- Add image gallery and real photos
- Implement multilingual support
- Add testimonials section
- Connect to actual booking API

## 📝 Notes

This is a frontend-only clone created for demonstration purposes. All content and pricing are based on the original Yukie Natori New York website. For the actual business and bookings, please visit the official website.

## 🙏 Acknowledgments

- Design inspiration: Yukie Natori New York (https://yukienatori-newyork.com/)
- Built with React and Vite
- Icons: Unicode emoji characters

---

**Developed with ❤️ for beauty and wellness**
