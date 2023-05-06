import AuthLayout from '@/hocs/AuthLayout';

export default function Activation() {
  return (
    <AuthLayout>
      <div className="text-white">We have sent you an email, please check all your inboxes.</div>
    </AuthLayout>
  );
}
