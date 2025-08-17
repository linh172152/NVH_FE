import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'gym', name: 'Phòng Gym' },
    { id: 'bowling', name: 'Bowling' },
  ];

  const services = [
    {
      id: 1,
      name: 'Phòng Gym',
      category: 'gym',
      description: 'Phòng tập thể dục hiện đại với đầy đủ thiết bị tập luyện chuyên nghiệp',
      price: 50000,
      unit: 'lần',
      image: 'https://www.nhavanhoasinhvien.vn/wp-content/uploads/2024/12/z6102634179598_0efe25717f0d11fb8140cf59f07e467a-scaled.jpg',
      features: ['Thiết bị hiện đại', 'Huấn luyện viên', 'Phòng thay đồ', 'Tủ khóa'],
    },
    {
      id: 2,
      name: 'Bowling',
      category: 'bowling',
      description: 'Sân bowling chuyên nghiệp với 8 làn chơi và thiết bị hiện đại',
      price: 80000,
      unit: 'lần',
  image: 'data:image/jpeg;base64,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',
      features: ['8 làn chơi', 'Giày bowling', 'Bóng bowling', 'Hướng dẫn'],
    },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Dịch vụ của chúng tôi</h1>
        <p className="text-lg text-gray-600">
          Khám phá các dịch vụ giải trí và thể thao đa dạng tại Nhà Văn Hóa Sinh Viên
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full mx-auto hover:shadow-xl transition-transform transform hover:-translate-y-1">
            <div className="h-56 bg-gray-200">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Bao gồm:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-primary-600 font-bold">
                  {service.price.toLocaleString()} VNĐ/{service.unit}
                </span>
                <div className="flex gap-2 items-center">
                  <Link
                    to="/booking"
                    className="btn-primary text-sm"
                  >
                    Đặt chỗ
                  </Link>
                  <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Chưa tìm thấy dịch vụ phù hợp?
        </h2>
        <p className="text-gray-600 mb-6">
          Liên hệ với chúng tôi để được tư vấn và hỗ trợ tìm dịch vụ phù hợp nhất
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="btn-primary"
          >
            Liên hệ tư vấn
          </Link>
          <Link
            to="/membership"
            className="btn-secondary"
          >
            Xem gói thành viên
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
