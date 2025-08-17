import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MembershipPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const membershipPlans = [
    {
      id: 'basic',
      name: 'Gói Cơ Bản',
      price: 500000,
      duration: '3 tháng',
      description: 'Phù hợp cho người mới bắt đầu',
      features: [
        'Sử dụng tất cả dịch vụ cơ bản',
        'Giảm giá 10% cho các dịch vụ',
        'Hỗ trợ qua điện thoại',
        'Tích điểm cơ bản',
      ],
      popular: false,
    },
    {
      id: 'premium',
      name: 'Gói Premium',
      price: 1200000,
      duration: '6 tháng',
      description: 'Lựa chọn phổ biến nhất',
      features: [
        'Tất cả quyền lợi gói cơ bản',
        'Giảm giá 20% cho các dịch vụ',
        'Ưu tiên đặt chỗ',
        'Tích điểm gấp đôi',
        'Hỗ trợ ưu tiên',
        'Miễn phí khóa học định kỳ',
      ],
      popular: true,
    },
    {
      id: 'vip',
      name: 'Gói VIP',
      price: 2000000,
      duration: '12 tháng',
      description: 'Trải nghiệm cao cấp nhất',
      features: [
        'Tất cả quyền lợi gói Premium',
        'Giảm giá 30% cho các dịch vụ',
        'Đặt chỗ không giới hạn',
        'Tích điểm gấp ba',
        'Hỗ trợ 24/7',
        'Miễn phí tất cả khóa học',
        'Phòng VIP riêng biệt',
        'Tặng kèm gói dịch vụ đặc biệt',
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Tiết kiệm chi phí',
      description: 'Giảm giá đặc biệt cho thành viên trên tất cả dịch vụ',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Ưu tiên đặt chỗ',
      description: 'Đặt chỗ trước và ưu tiên sử dụng dịch vụ',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Tích điểm thưởng',
      description: 'Tích điểm và đổi thưởng khi sử dụng dịch vụ',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
        </svg>
      ),
      title: 'Khóa học miễn phí',
      description: 'Tham gia các khóa học và workshop miễn phí',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Gói Thành Viên</h1>
        <p className="text-lg text-gray-600">
          Chọn gói thành viên phù hợp và tận hưởng những ưu đãi đặc biệt
        </p>
      </div>

      {/* Benefits Section */}
      <section className="bg-gray-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quyền lợi thành viên</h2>
          <p className="text-gray-600">
            Khám phá những lợi ích độc quyền dành cho thành viên NVH
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary-600">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Plans */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Chọn gói thành viên</h2>
          <p className="text-gray-600">
            So sánh và chọn gói thành viên phù hợp nhất với nhu cầu của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-lg shadow-lg p-6 border-2 transition-all flex flex-col ${
                selectedPlan === plan.id
                  ? 'border-primary-500 shadow-xl'
                  : 'border-gray-200 hover:border-primary-300'
              } ${plan.popular ? 'ring-2 ring-primary-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Phổ biến nhất
                  </span>
                </div>
              )}

              <div className="mb-6 flex-1">
                <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    {plan.price.toLocaleString()}
                  </span>
                  <span className="text-gray-600"> VNĐ</span>
                </div>
                <p className="text-sm text-gray-500">Thời hạn: {plan.duration}</p>
                </div>

                <div className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors mt-auto ${
                  selectedPlan === plan.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {selectedPlan === plan.id ? 'Đã chọn' : 'Chọn gói này'}
              </button>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div className="mt-8 text-center">
            <Link
              to="/register"
              className="btn-primary text-lg px-8 py-3"
            >
              Đăng ký ngay
            </Link>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Làm thế nào để đăng ký thành viên?</h3>
            <p className="text-gray-600 text-sm">
              Bạn có thể đăng ký thành viên trực tuyến qua website hoặc đến trực tiếp tại các trung tâm NVH.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Có thể gia hạn gói thành viên không?</h3>
            <p className="text-gray-600 text-sm">
              Có, bạn có thể gia hạn gói thành viên trước khi hết hạn để tiếp tục hưởng các ưu đãi.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Điểm thưởng có thời hạn không?</h3>
            <p className="text-gray-600 text-sm">
              Điểm thưởng có thời hạn 12 tháng kể từ ngày tích lũy và sẽ tự động hết hạn nếu không sử dụng.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Có thể chuyển đổi gói thành viên không?</h3>
            <p className="text-gray-600 text-sm">
              Có thể nâng cấp gói thành viên bất cứ lúc nào, nhưng không thể hạ cấp trong thời gian sử dụng.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cần tư vấn thêm?</h2>
        <p className="text-gray-600 mb-6">
          Liên hệ với chúng tôi để được tư vấn chi tiết về các gói thành viên
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="btn-primary"
          >
            Liên hệ tư vấn
          </Link>
          <a
            href="tel:0123456789"
            className="btn-secondary"
          >
            Gọi ngay: 0123 456 789
          </a>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
