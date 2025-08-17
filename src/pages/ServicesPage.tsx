import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'fitness', name: 'Thể dục' },
    { id: 'sports', name: 'Thể thao' },
    { id: 'entertainment', name: 'Giải trí' },
  ];

  const services = [
    {
      id: 1,
      name: 'Phòng Gym',
      category: 'fitness',
      description: 'Phòng tập thể dục hiện đại với đầy đủ thiết bị tập luyện chuyên nghiệp',
      price: 50000,
      unit: 'lần',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Thiết bị hiện đại', 'Huấn luyện viên', 'Phòng thay đồ', 'Tủ khóa'],
    },
    {
      id: 2,
      name: 'Bowling',
      category: 'entertainment',
      description: 'Sân bowling chuyên nghiệp với 8 làn chơi và thiết bị hiện đại',
      price: 80000,
      unit: 'lần',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['8 làn chơi', 'Giày bowling', 'Bóng bowling', 'Hướng dẫn'],
    },
    {
      id: 3,
      name: 'Bể bơi',
      category: 'sports',
      description: 'Bể bơi trong nhà với nước ấm quanh năm, phù hợp cho mọi lứa tuổi',
      price: 60000,
      unit: 'lần',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
      features: ['Nước ấm', 'Phòng thay đồ', 'Tủ khóa', 'Hướng dẫn bơi'],
    },
    {
      id: 4,
      name: 'Sân Tennis',
      category: 'sports',
      description: 'Sân tennis ngoài trời với mặt sân chất lượng cao',
      price: 120000,
      unit: 'giờ',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Mặt sân chất lượng', 'Vợt tennis', 'Bóng tennis', 'Ánh sáng ban đêm'],
    },
    {
      id: 5,
      name: 'Phòng Yoga',
      category: 'fitness',
      description: 'Phòng yoga yên tĩnh với không gian thoáng đãng và thiết bị chuyên dụng',
      price: 40000,
      unit: 'lần',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      features: ['Thảm yoga', 'Gối yoga', 'Giáo viên hướng dẫn', 'Âm nhạc thư giãn'],
    },
    {
      id: 6,
      name: 'Bàn Billiard',
      category: 'entertainment',
      description: 'Phòng billiard với các bàn chơi chuyên nghiệp và không gian thoải mái',
      price: 70000,
      unit: 'giờ',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Bàn chơi chuyên nghiệp', 'Gậy billiard', 'Bóng billiard', 'Không gian thoải mái'],
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                <span className="text-primary-600 font-bold">
                  {service.price.toLocaleString()} VNĐ/{service.unit}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Bao gồm:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Link
                  to="/booking"
                  className="flex-1 btn-primary text-center"
                >
                  Đặt chỗ
                </Link>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
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
