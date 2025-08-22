import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type MembershipPlan = {
	id: string;
	name: string;
	price: number;
	duration: string;
	description?: string;
};

type BookingPayment = {
  serviceId: string;
  serviceName: string;
  pricePerHour: number;
  date: string;
  time: string;
  durationHours: number;
};

type LocationState =
  | {
      type: 'membership';
      plan: MembershipPlan;
    }
  | {
      type: 'booking';
      booking: BookingPayment;
    }
  | undefined;

const PaymentPage: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [method, setMethod] = useState<'vnpay' | 'momo' | 'card' | 'cash'>('vnpay');
	const [loading, setLoading] = useState(false);

	const state = location.state as LocationState;

	const totalAmount = useMemo(() => {
		if (state?.type === 'membership') {
			return state.plan.price;
		}
		if (state?.type === 'booking') {
			return state.booking.pricePerHour * state.booking.durationHours;
		}
		return 0;
	}, [state]);

	const handlePay = (e: React.FormEvent) => {
		e.preventDefault();
		if (!state) return;
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			if (state.type === 'membership') {
				navigate('/my-memberships');
			} else if (state.type === 'booking') {
				navigate('/my-bookings');
			}
		}, 1500);
	};

	if (!state) {
		return (
			<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto">
					<div className="bg-white rounded-lg shadow-sm border p-8 text-center">
						<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
							<svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
							</svg>
						</div>
						<h1 className="text-2xl font-bold text-gray-900 mb-2">Không có dữ liệu thanh toán</h1>
						<p className="text-gray-600 mb-8">Vui lòng thực hiện chọn gói hoặc đặt chỗ trước khi thanh toán.</p>
						<div className="flex gap-3 justify-center">
							<Link to="/membership" className="btn-secondary">Gói thành viên</Link>
							<Link to="/booking" className="btn-primary">Đặt chỗ dịch vụ</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="mb-8">
					<nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
						<Link to="/" className="hover:text-primary-600">Trang chủ</Link>
						<span>/</span>
						<span className="text-gray-900">Thanh toán</span>
					</nav>
					<h1 className="text-3xl font-bold text-gray-900">Thanh toán</h1>
					<p className="text-gray-600 mt-2">Hoàn tất thanh toán để xác nhận đơn hàng của bạn</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Payment Summary */}
					<div className="lg:col-span-1">
						<div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
							<h2 className="text-lg font-semibold text-gray-900 mb-6">Tóm tắt đơn hàng</h2>
							{state.type === 'membership' && (
								<div className="space-y-4">
									<div className="p-4 bg-gray-50 rounded-lg">
										<h3 className="font-medium text-gray-900 mb-2">{state.plan.name}</h3>
										{state.plan.description && (
											<p className="text-sm text-gray-600 mb-3">{state.plan.description}</p>
										)}
									</div>
									<div className="space-y-3">
										<div className="flex justify-between text-sm">
											<span className="text-gray-600">Loại:</span>
											<span className="font-medium">Gói thành viên</span>
										</div>
										<div className="flex justify-between text-sm">
											<span className="text-gray-600">Thời hạn:</span>
											<span className="font-medium">{state.plan.duration}</span>
										</div>
										<div className="flex justify-between text-sm">
											<span className="text-gray-600">Giá gói:</span>
											<span className="font-medium">{state.plan.price.toLocaleString()} VNĐ</span>
										</div>
									</div>
									<hr className="my-4" />
									<div className="flex justify-between text-lg font-bold">
										<span>Tổng tiền</span>
										<span className="text-primary-600">{totalAmount.toLocaleString()} VNĐ</span>
									</div>
								</div>
							)}
							{state.type === 'booking' && (
								<div className="space-y-4">
									<div className="p-4 bg-gray-50 rounded-lg">
										<h3 className="font-medium text-gray-900 mb-2">{state.booking.serviceName}</h3>
										<p className="text-sm text-gray-600">{state.booking.date} lúc {state.booking.time}</p>
									</div>
									<div className="space-y-3">
										<div className="flex justify-between text-sm">
											<span className="text-gray-600">Loại:</span>
											<span className="font-medium">Đặt chỗ dịch vụ</span>
										</div>
										<div className="flex justify-between text-sm">
											<span className="text-gray-600">Thời lượng:</span>
											<span className="font-medium">{state.booking.durationHours} giờ</span>
										</div>
										<div className="flex justify-between text-sm">
											<span className="text-gray-600">Đơn giá:</span>
											<span className="font-medium">{state.booking.pricePerHour.toLocaleString()} VNĐ/giờ</span>
										</div>
										<div className="flex justify-between text-sm">
											<span className="text-gray-600">Thành tiền:</span>
											<span className="font-medium">{totalAmount.toLocaleString()} VNĐ</span>
										</div>
									</div>
									<hr className="my-4" />
									<div className="flex justify-between text-lg font-bold">
										<span>Tổng tiền</span>
										<span className="text-primary-600">{totalAmount.toLocaleString()} VNĐ</span>
									</div>
								</div>
							)}
							
							{/* Security note */}
							<div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
								<div className="flex items-start">
									<svg className="h-5 w-5 text-green-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<div>
										<p className="text-sm font-medium text-green-800">Bảo mật 100%</p>
										<p className="text-xs text-green-700">Thông tin thanh toán được mã hóa SSL</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Payment form */}
					<div className="lg:col-span-2">
						<div className="bg-white rounded-lg shadow-sm border p-8">
							<h2 className="text-xl font-semibold text-gray-900 mb-8">Phương thức thanh toán</h2>
							<form className="space-y-8" onSubmit={handlePay}>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-4">Chọn phương thức thanh toán</label>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<label className={`border rounded-lg p-4 cursor-pointer transition-all ${method === 'vnpay' ? 'border-primary-600 ring-2 ring-primary-200 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}>
											<input type="radio" name="method" className="hidden" checked={method === 'vnpay'} onChange={() => setMethod('vnpay')} />
											<div className="flex items-center gap-3">
												<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
													<span className="text-white text-xs font-bold">VN</span>
												</div>
												<div>
													<span className="font-medium text-gray-900">VNPay</span>
													<p className="text-xs text-gray-500">Thanh toán qua ngân hàng</p>
												</div>
											</div>
										</label>
										<label className={`border rounded-lg p-4 cursor-pointer transition-all ${method === 'momo' ? 'border-primary-600 ring-2 ring-primary-200 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}>
											<input type="radio" name="method" className="hidden" checked={method === 'momo'} onChange={() => setMethod('momo')} />
											<div className="flex items-center gap-3">
												<div className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center">
													<span className="text-white text-xs font-bold">M</span>
												</div>
												<div>
													<span className="font-medium text-gray-900">MoMo</span>
													<p className="text-xs text-gray-500">Ví điện tử MoMo</p>
												</div>
											</div>
										</label>
										<label className={`border rounded-lg p-4 cursor-pointer transition-all ${method === 'card' ? 'border-primary-600 ring-2 ring-primary-200 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}>
											<input type="radio" name="method" className="hidden" checked={method === 'card'} onChange={() => setMethod('card')} />
											<div className="flex items-center gap-3">
												<div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
													<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
														<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
													</svg>
												</div>
												<div>
													<span className="font-medium text-gray-900">Thẻ tín dụng/Ghi nợ</span>
													<p className="text-xs text-gray-500">Visa, Mastercard, JCB</p>
												</div>
											</div>
										</label>
										<label className={`border rounded-lg p-4 cursor-pointer transition-all ${method === 'cash' ? 'border-primary-600 ring-2 ring-primary-200 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}>
											<input type="radio" name="method" className="hidden" checked={method === 'cash'} onChange={() => setMethod('cash')} />
											<div className="flex items-center gap-3">
												<div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
													<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
														<path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h6zM4 14a2 2 0 002 2h8a2 2 0 002-2v-2H4v2z" />
													</svg>
												</div>
												<div>
													<span className="font-medium text-gray-900">Tiền mặt tại quầy</span>
													<p className="text-xs text-gray-500">Thanh toán trực tiếp</p>
												</div>
											</div>
										</label>
									</div>
								</div>

								{/* Card fields (mock) */}
								{method === 'card' && (
									<div className="bg-gray-50 rounded-lg p-6 space-y-4">
										<h3 className="text-sm font-medium text-gray-900 mb-4">Thông tin thẻ</h3>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="md:col-span-2">
												<label className="block text-sm font-medium text-gray-700 mb-1">Tên trên thẻ</label>
												<input className="input-field w-full" placeholder="Nguyễn Văn A" />
											</div>
											<div className="md:col-span-2">
												<label className="block text-sm font-medium text-gray-700 mb-1">Số thẻ</label>
												<input className="input-field w-full" placeholder="1234 5678 9012 3456" />
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">Ngày hết hạn</label>
												<input className="input-field w-full" placeholder="MM/YY" />
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
												<input className="input-field w-full" placeholder="123" />
											</div>
										</div>
									</div>
								)}

								{/* Cash payment note */}
								{method === 'cash' && (
									<div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
										<div className="flex items-start">
											<svg className="h-5 w-5 text-amber-600 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											<div>
												<h4 className="text-sm font-medium text-amber-800">Lưu ý thanh toán tiền mặt</h4>
												<p className="text-sm text-amber-700 mt-1">Vui lòng đến quầy lễ tân để hoàn tất thanh toán trong vòng 24 giờ sau khi đặt.</p>
											</div>
										</div>
									</div>
								)}

								{/* Terms and conditions */}
								<div className="border-t pt-6">
									<div className="flex items-start">
										<input type="checkbox" className="mt-1 mr-3" required />
										<label className="text-sm text-gray-600">
											Tôi đồng ý với <Link to="/terms" className="text-primary-600 hover:underline">Điều khoản sử dụng</Link> và <Link to="/privacy" className="text-primary-600 hover:underline">Chính sách bảo mật</Link> của dịch vụ.
										</label>
									</div>
								</div>

								{/* Action buttons */}
								<div className="flex flex-col sm:flex-row gap-4 pt-6">
									<button 
										type="button" 
										onClick={() => navigate(-1)}
										className="btn-secondary flex-1 sm:flex-none"
									>
										Quay lại
									</button>
									<button 
										type="submit" 
										disabled={loading} 
										className="btn-primary flex-1 sm:flex-none"
									>
										{loading ? (
											<div className="flex items-center justify-center">
												<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
													<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
													<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
												</svg>
												Đang xử lý...
											</div>
										) : (
											`Thanh toán ${totalAmount.toLocaleString()} VNĐ`
										)}
									</button>
								</div>
							</form>
						</div>

						{/* Additional info */}
						<div className="mt-6 bg-white rounded-lg shadow-sm border p-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">Hỗ trợ thanh toán</h3>
							<div className="space-y-3 text-sm text-gray-600">
								<div className="flex items-center">
									<svg className="h-4 w-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span>Thanh toán an toàn và bảo mật</span>
								</div>
								<div className="flex items-center">
									<svg className="h-4 w-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span>Hỗ trợ hoàn tiền trong 7 ngày</span>
								</div>
								<div className="flex items-center">
									<svg className="h-4 w-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span>Hỗ trợ 24/7 qua hotline</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentPage;