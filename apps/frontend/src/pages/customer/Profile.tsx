import { useEffect, useState } from 'react';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

import {
  ProfileForm,
  profileSchema,
} from '@/modules/customer/validations/profile.schema';
import useAuth from '@/hooks/useAuth';
import { paths } from '@/constants/routerPaths';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const { user, logout, updateUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      address: user?.address || '',
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        address: user.address || '',
      });
    }
  }, [user, reset]);

  const onSubmit = (data: ProfileForm) => {
    try {
      if (!user) return;

      updateUser(data);
      toast.success('Perfil actualizado correctamente');
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      toast.error(`Hubo un error al actualizar el perfil`);
    }
  };

  const handleEditToggle = () => {
    if (isEditing) {
      handleSubmit(onSubmit)();
    } else {
      setIsEditing(true);
    }
  };

  const handleLogout = () => {
    logout();
    navigate(`/${paths.authRoot}/${paths.signIn}`);
  };

  const handleCancel = () => {
    reset({
      name: user?.name || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      address: user?.address || '',
    });
    setIsEditing(false);
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-glass border border-borderGlass backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-white/90">Mi Perfil</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label="Nombre"
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
              disabled={!isEditing}
              {...register('name')}
            />
            <Input
              label="Apellido"
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName?.message}
              disabled={!isEditing}
              {...register('lastName')}
            />
          </div>
          <Input
            label="Correo electrónico"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            disabled
            {...register('email')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label="Teléfono"
              isInvalid={!!errors.phoneNumber}
              errorMessage={errors.phoneNumber?.message}
              disabled={!isEditing}
              {...register('phoneNumber')}
            />
            <Input
              label="Dirección"
              isInvalid={!!errors.address}
              errorMessage={errors.address?.message}
              disabled={!isEditing}
              {...register('address')}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
            {isEditing && (
              <Button
                type="button"
                color="danger"
                variant="flat"
                onPress={handleCancel}
              >
                Cancelar
              </Button>
            )}
            {!isEditing && (
              <Button
                type="button"
                color="danger"
                variant="flat"
                onPress={handleLogout}
              >
                Cerrar sesión
              </Button>
            )}
            <Button
              type="button"
              className="sm:w-auto w-full"
              color="primary"
              onPress={handleEditToggle}
              isLoading={isSubmitting}
            >
              {isEditing ? 'Guardar cambios' : 'Editar perfil'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProfilePage;
